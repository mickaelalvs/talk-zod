import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup((monaco) => {
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
        diagnosticCodesToIgnore: [2307], // Cannot find module
    })

    return {
        editorOptions: {
            wordWrap: 'on',
            lineNumbers: 'on',
        }
    }
})