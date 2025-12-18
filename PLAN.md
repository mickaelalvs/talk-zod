# Plan du talk

## Rappel Typescript + pourquoi Zod ?

    - Système de typing et tout ses avantages
        - Sécurité
        - Autocomplétion
        - Documentation
        - Uniquement au Runtime
            - exemple d'une requète ou d'un formulaire, typé en TS mais ou on peut rentrer n'importe quoi au runtime
    - Here come Zod
        - Validation au Runtime
        - Système de schéma
        - Typescript First

## Use Cases :
    
    - Form / Request validation
        - Principe de Schéma
        - .refine
    - Transform
        - .transform
        - z.coerce
    - Type infering
        - input vs output
    - Lib externe
        - openapi-to-zod
        - x-to-zod / zod-to-x

## Limitation + pas magique

    - Performance si beaucoup d’infer
    - bundle size ⇒ Zod mini

## Reference
   
    - Zod Playground
    - Matt Pocock

## Conclusion