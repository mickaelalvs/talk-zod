# Examples :

## Typescript

Base : 

```ts
interface Animal {
    name?: string;
    identificationNumber: string;
}

interface Sheep implements Animal {
    woolQuantity: number;
}

interface Cow implements Animal {
    lastMilkingDate: Date;
    milkQuantity: number;
    leatherQuantity: number;
}

const marguerite: Cow = {
    milkQuantity: 5;
}

const shawn: Sheep = {
    woolQuantity: 20;
}

const shear(animal: Sheep) {
    // [...]
}

const milk(animal: Cow) {
    // [...]
}
```

Tester l'auto-complétion, voir qu'avec les fonctions on ne peux pas passer ce qu'on veux

Montrer un exemple avec une API de vente 

```ts
// Sur un serveur distant

export default function sellToBaker(animal: Cow) {
    return animal.milkQuantity * 10;
} 
```

Quand on code notre API, on est bien sur que le milkQuantity est présent dans `animal`

## Zod

### Validation de schéma + type inferring

Validation de schéma dans une route API, et inférence de type pour utiliser le type directement au même endroit

```ts
const animalSchema = z.object({
    name: z.string().optional();
    identificationNumber: z.string().min(10)
})

const sheepSchema = animalSchema.extends(z.object({
    wool: z.number().max(30, { message: 'Trop de laine' }),
}))

type Sheep = z.infer<typeof sheepSchema>
```

```ts
app.get('/sell/wool', (req, res) => {
    const parsingResult = sheepSchema.safeParse(req.body.animal)

    if (!result.success) {
        res.status(422).json(result.error)
    }

    res.send(sellWool(req.body.animal))
})

function sellWool(animal: Sheep) {
    return animal.woolQuantity * 5
}
```

<!-- Trouver un exemple pour le refine, peut être male / femelle -->

### Transformation de donnée

Exemple dans un formulaire, on transforme le résultat de certain input pour coller à ce que demande l'API

```ts
const cowSchema = animalSchema.extends(z.object({
    milkQuantity: z.coerce.number(),
    leatherQuantity: z.coerce.number(),
    lastMilkingDate: z.coerce.date().transform(date => formatDateForAPI(date))
}))
```

### Lib externe

zod-to-openapi, pour pouvoir définir son swagger à partir de Zod 

```ts
const animalSchema = z.object({
    name: z.string().optional();
    identificationNumber: z.string().min(10)
}).openapi('Animal')

const sellLeatherResponseSchema = z.object({
    quantityOfSelledLeather: z.number().min(0),
    moneyGranted: z.number().min(0)
}).openapi('SellLeatherResponseSchema')
```

### Limitations 

Si on suis ce qu'on a vu avant, on pourrai tout faire sans Typescript au final, uniquement des schéma Zod dans pour définir les entités et tout partager partout

Cependant, on peut arriver à des extrèmes qu'on ne veux pas (temps de compilation hyper long => plusieurs seconde dans l'IDE à chaques changements)
Et cela augmente aussi la bundle size (D'ou Zod Mini)