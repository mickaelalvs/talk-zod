#!/bin/bash

# Script to reset all schema files by copying content from -schema-base.ts to -schema.ts

# Check for dry-run option
DRY_RUN=false
if [[ "$1" == "--dry-run" ]] || [[ "$1" == "-n" ]]; then
  DRY_RUN=true
  echo "DRY RUN MODE - No files will be modified"
  echo ""
fi

# Check if something is running on port 3030
PORT=3030
PID=$(lsof -ti:$PORT 2>/dev/null)

if [ -n "$PID" ]; then
  if [ "$DRY_RUN" = true ]; then
    echo "[DRY RUN] Would kill process $PID running on port $PORT"
  else
    echo "Killing process $PID running on port $PORT..."
    kill -9 $PID 2>/dev/null
    if [ $? -eq 0 ]; then
      echo "Process killed successfully"
    else
      echo "Warning: Failed to kill process $PID"
    fi
  fi
else
  echo "No process found running on port $PORT"
fi

echo ""

# Find all -schema-base.ts files
find . -name "*-schema-base.ts" -type f | while read -r base_file; do
  # Get the directory of the base file
  dir=$(dirname "$base_file")
  
  # Get the filename without path
  filename=$(basename "$base_file")
  
  # Replace -schema-base.ts with -schema.ts
  schema_file="$dir/${filename/-schema-base.ts/-schema.ts}"
  
  # Check if the corresponding schema file exists
  if [ -f "$schema_file" ]; then
    if [ "$DRY_RUN" = true ]; then
      echo "[DRY RUN] Would reset: $schema_file"
      echo "          (from: $base_file)"
    else
      # Copy content from base to schema file
      cp "$base_file" "$schema_file"
      echo "Reset: $schema_file"
    fi
  else
    echo "Warning: Corresponding schema file not found: $schema_file"
  fi
done

if [ "$DRY_RUN" = true ]; then
  echo ""
  echo "Dry run complete! Run without --dry-run to apply changes."
else
  echo "Reset complete!"
fi
