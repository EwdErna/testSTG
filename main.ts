
namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Life = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const Attack = SpriteKind.create()
    export const BombEffect2 = SpriteKind.create()
    export const Items = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c 1 c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c 1 c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
    `
    //% blockIdentity=images._tile
    export const tile4 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c 1 c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
    `
    //% blockIdentity=images._tile
    export const tile5 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c 1
    `
    //% blockIdentity=images._tile
    export const tile6 = img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    `
}
function drawGuage(value: number) {
    if (value > 0) {
        mySprite.image.drawLine(0, 0, Math.min(value, 7), 0, 2)
    }
    if (value > 7) {
        mySprite.image.drawLine(7, 0, Math.min(value, 15), 0, 5)
    }
}
function fireMainShot() {
    projectile2 = sprites.createProjectileFromSprite(img`
        7
        7
        7
        7
    `, mySprite, 0, -250)
}
function drawLife() {
    i = 0
    for (let value2 of LifeList) {
        value2.setPosition(scene.cameraLeft() + 8, scene.cameraTop() + (8 + i * 16))
        i += 1
    }
}
function nop(num: number) {

}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 7 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . 1 9 1 . . . . . . .
        . . . . . 1 1 5 1 1 . . . . . .
        . . . . 1 1 1 5 1 1 1 . . . . .
        . . . . 1 1 1 1 1 1 1 . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
    mySprite.setPosition(scene.screenWidth() / 2, scene.screenHeight() * 1.8)
})
function drawBomb() {
    i = 0
    for (let value of BombList) {
        value.setPosition(scene.cameraLeft() + 24, scene.cameraTop() + (8 + i * 16))
        i += 1
    }
}
function buttonB() {
    if (controller.B.isPressed()) {
        BButton += 1
    } else if (BButton != 0) {
        fireBombWithPower(BButton)
        BButton = 0
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.BombEffect2, function (sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy(effects.warmRadial, 500)
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fountain, 1000)
    if (LifeList.length != 0) {
        LifeList.pop().destroy(effects.fountain, 100)
    } else {
        game.over(false, effects.blizzard)
    }
})
sprites.onCreated(SpriteKind.BombEffect2, function (sprite) {
    sprite.setPosition(mySprite.x, mySprite.y)
    sprite.lifespan = 1000
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    let eLife: number = sprite.data
    eLife -= 1
    sprite.data = eLife
    info.changeScoreBy(1)
    if (eLife <= 0) {
        sprite.destroy(effects.warmRadial, 500)
        info.changeScoreBy(8)
        if (Math.percentChance(10)) {
            Item = sprites.create(img`
                .
            `, SpriteKind.Items)
            Item.setPosition(sprite.x, sprite.y)
            Item.vy = 10
            Item.data = Math.randomRange(1, 3)
            switch (Item.data as number) {
                case 1:
                    Item.setImage(LifeOrb)
                    break;
                case 2:
                    Item.setImage(BomOrb)
                    break;
                case 3:
                    Item.setImage(img`
                        . . . . . . . . . . . . . . . .
                        . . . . . . a a a a . . . . . .
                        . . . . a a a 5 5 a a a . . . .
                        . . . b b b b a a a a a a . . .
                        . . a b b b b c c c 1 1 a a . .
                        . . b b b b b c c c 1 1 5 a . .
                        . a b b b b c c c c c 5 5 a a .
                        . a b b b c c c a a a a 5 a a .
                        . a a b b c c a a a a a a a a .
                        . a c b b c c a a a a a a a a .
                        . . a c b b c a a a a a c a . .
                        . . a c c b c c a a a c a a . .
                        . . . a c c c c c c c c a . . .
                        . . . . a a c c c c a a . . . .
                        . . . . . . a a a a . . . . . .
                        . . . . . . . . . . . . . . . .
                    `)
                    break;
            }
        }
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    sprite.destroy()
})
function fireBombWithPower(power2: number) {
    if (BombList.length > 0) {
        if (power2 < 50) {

        } else if (power2 < 100) {
            BombEffect = sprites.create(img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . 2 . . 2 . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . 2 . . 2 . . . . . . . 2 . 2 2 . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . 2 . . 2 . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . 2 2 2 . . . . . 1 . . . . . 2 . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . 2 . 2 2 2 . . . . . 1 . . . . . . 2 . 2 . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 2 . 2 2 2 . . . . . 1 . . . . . . . 2 . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . 2 . 2 2 2 . . . . 2 . . . . . . . 2 . 2 . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . 2 2 2 . . . . 2 . . . . . . 2 . . . 2 . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . 2 . . . . . . . . . . 5 . . 2 2 2 . . . 5 . . . . . . 2 . . . . 2 . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 2 . . . . . . . . 1 . . 5 . . 2 2 2 . . . 5 . . . . . 1 . . . . . . 2 . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 2 . . . . . . . . 1 . . 5 5 5 5 5 5 5 5 5 5 . . . . 1 . . . . . . . 2 . . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 2 . . . . . . . . 1 . 5 . 5 . 2 2 2 . . 5 5 . . . . . . . . . . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . 2 2 . . . . . . . 1 . . 5 . 2 2 2 . . 5 . 5 . . . . . . . . . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . . 5 5 5 . . . 5 . . . . 5 2 2 2 2 5 . . . 5 . . . . . . . . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . . . . . 1 1 1 . . . . . 2 2 5 2 2 . . . . . 5 . 5 5 5 . . . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . . . . . . . 5 5 5 . . 2 2 2 5 2 2 2 . . . 1 1 1 . . . . . . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . . . . . . . 5 . . 5 5 2 2 2 5 2 2 2 2 2 . . 5 . . . . . . . 2 2 2 2 2 . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . . 2 2 2 2 2 5 2 2 2 2 2 2 5 5 5 2 2 2 2 2 2 5 2 2 2 2 2 2 2 . . . 2 . . . . . . . . . . . .
                . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 5 5 5 5 5 5 5 5 5 2 2 2 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . .
                . . . . . . . . . . . . . . 2 . . . 2 2 2 2 2 5 2 2 2 2 2 2 5 5 5 2 2 2 2 2 2 5 2 2 2 2 2 2 2 . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . 1 1 1 1 1 . 5 . . 2 2 2 2 2 5 2 2 2 2 2 . . 5 . . . . . . 2 2 2 . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . 2 2 2 2 2 . . . . . . 5 . . . . 2 2 2 5 2 2 2 . . . . 5 . . . . 1 1 . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . . . . . . . 5 . . . . 1 2 2 5 2 2 . . 1 1 . 5 . . . . . . . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . 2 . . . . . . . 1 1 5 . . . 1 2 2 2 2 2 5 . . . 5 5 5 5 . . . . . . . . 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 2 . . . 5 5 5 . . . 5 . . 1 . 2 2 2 . 5 . . 5 . . . . 2 2 2 . . . . 2 . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . 2 5 5 5 . . . . . . . 5 5 . . 2 2 2 . 5 . 5 . . . . . . . . 5 5 5 5 2 . . . . . . . . . . . . .
                . . . . . . . . . . . . . . 1 1 2 . . . . . 1 . . . . 5 5 5 5 5 5 5 5 5 . . . 1 . . . . . . . . 2 2 2 . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . 2 . . . . 5 . . . . 1 . . . 2 2 2 . 5 . . . . 1 . . . . . . . . 2 . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . 2 . . . 5 . . . . 1 . . . 2 2 2 . 5 . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . 1 . . . 2 2 2 . 5 . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . 1 . . . . . 2 . . . . 2 2 2 . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . 2 2 2 . . 2 . . . 2 . . 1 . 2 . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . 2 . . . 2 . . . 2 . . . 1 . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . 2 . . . . 2 2 . . . . . . . 2 . . . 2 . . . 2 . 2 2 . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . 2 . . . . . . . 2 2 . 2 . . . 2 . . . 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            `, SpriteKind.BombEffect2)
            BombEffect.lifespan = 1000
            BombList.pop().destroy(effects.coolRadial, 100)
        } else {
            BombEffect = sprites.create(img`
                . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . .
                . . . . . . . . . 2 2 2 . . . . 2 2 2 2 5 2 2 5 2 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 . . 2 . . . . . . . .
                . . . . . . . 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 . . . . . . . .
                . . . . . 2 2 . . . . . . 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 . . . . . . .
                . . . . . 2 2 . . . . . 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 . . . . . .
                . . . . . . . . . 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 . . . . . .
                . . . . . . . . . 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 5 2 2 2 2 2 2 2 . 2 2 2 . . . . .
                . . . . . . . . 2 2 2 2 5 2 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 5 5 5 2 2 2 2 2 2 2 2 2 . . . . .
                . . . . 2 . . 2 2 2 5 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 5 5 5 2 2 2 2 2 2 2 . 2 . . . .
                . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 2 2 2 2 2 2 . 2 . . . .
                . . . 2 . . 2 2 2 2 2 2 2 2 5 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 2 5 5 5 5 2 2 2 2 2 . 2 . . . .
                . . . . . 2 2 2 2 2 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 2 5 5 5 5 5 2 2 2 2 2 . 2 . . .
                . . . . 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 2 5 5 5 5 5 5 2 5 5 2 5 5 5 5 5 5 2 2 2 2 2 2 . . .
                . . . . 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 5 5 5 2 5 2 5 5 5 5 5 5 5 2 2 2 2 2 . 2 . .
                . . . 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 2 5 2 5 5 5 5 5 5 5 5 2 2 2 2 2 2 . .
                . . . 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 2 5 5 5 5 2 5 2 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . .
                . . 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 2 5 2 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . .
                . . 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 . .
                . 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 .
                . 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 2 2 2 2 .
                . 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 2 2 2 2 .
                . 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 2 2 2 2 .
                2 2 2 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 5 5 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 2 2 2 2
                2 2 2 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 2 2 2 2
                2 2 2 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 5 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 2 2 2 2
                2 2 2 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 2 2 2 2
                2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 2 5 2 2
                2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 2 5 2 2
                2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 2 5 2 5 5 5 5 5 5 5 2 5 2 2
                2 2 2 2 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 1 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 2 2 2 2 5 5 5 5 5 5 5 5 2 5 2 2
                2 2 2 2 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 2 2 2 2 5 5 5 5 5 5 5 5 2 5 2 2
                2 2 2 2 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 2 2 2 5 5 5 5 5 5 5 2 5 2 2
                2 2 2 2 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 2 2 2 2
                2 2 2 2 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 1 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 2 2 2
                2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 5 5 2 2 2
                2 2 2 2 5 5 5 5 5 5 2 5 5 5 5 5 5 5 1 5 5 5 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 5 5 5 5 5 2 2 2 2 5 5 5 5 5 5 5 5 5 2 2 2
                2 2 2 2 5 5 5 5 5 5 2 5 5 5 5 5 5 5 1 1 5 5 5 5 1 1 5 1 1 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2
                . 2 2 2 2 5 5 5 5 5 2 5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 5 1 1 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 .
                . 2 2 2 2 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 .
                . 2 2 2 2 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 .
                . 2 2 2 2 2 5 2 5 2 5 5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 .
                . . 2 2 2 2 5 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 . .
                . . 2 2 2 2 5 5 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . .
                . . . 2 2 2 5 5 5 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 2 . . .
                . . . 2 2 2 2 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . . .
                . . . . 2 2 2 5 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . . . .
                . . . . 2 2 2 5 2 5 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . . . .
                . . . . . 2 2 2 5 2 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . . . . .
                . . . . . . 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 . . . . . .
                . . . . . . . 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 2 2 2 2 2 . . . . . . .
                . . . . . . . 2 2 2 2 2 2 5 5 5 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 2 2 2 2 2 2 . . . . . 2 .
                . . . . . . . . 2 2 2 2 2 2 5 5 5 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 5 5 5 2 5 2 2 2 2 2 2 . . . . . 2 2 .
                . . . . . . . . . 2 2 2 2 2 2 2 5 5 5 5 2 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 . . . . . . 2 . .
                . . . . . . . . . . 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 . . . . . . . 2 . .
                . . . . . . . . . . . . 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 2 . . .
                . . 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . .
                . . . 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . .
                . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 5 2 2 2 2 2 2 5 5 5 5 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 . . . .
                . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . 2 . . . . .
                . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 5 5 5 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 . . . . . .
            `, SpriteKind.BombEffect2)
            BombEffect.lifespan = 1500
            BombList.pop().destroy(effects.warmRadial, 100)
        }
    }
}
function buttonA() {
    if (controller.A.isPressed()) {
        AButton += 1
    } else {
        AButton = 0
    }
    if (AButton != 0 && AButton % 4 == 0) {
        fireMainShot()
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.BombEffect2, function (sprite, otherSprite) {
    sprite.destroy(effects.warmRadial, 500)
})
function deleteBombOrb(mySprite: Sprite) {
    mySprite.destroy()
}
sprites.onOverlap(SpriteKind.Items, SpriteKind.Player, function (sprite, otherSprite) {
    switch (sprite.data as number) {
        case 1://ライフ回復
            sprites.create(LifeOrb, SpriteKind.Life)
            LifeList = sprites.allOfKind(SpriteKind.Life)
            break;
        case 2://ボム増加
            sprites.create(BomOrb, SpriteKind.Bomb)
            BombList = sprites.allOfKind(SpriteKind.Bomb)
            break;
        case 3://得点加算
            info.changeScoreBy(15)
            break;
    }
    sprite.destroy()
})
let BombEffect: Sprite = null
let BButton = 0
let i = 0
let projectile2: Sprite = null
let Item: Sprite = null
let AButton = 0
let mySprite: Sprite = null
let BombList: Sprite[] = []
let LifeList: Sprite[] = []
let myEnemy: Sprite = null
let BomOrb = img`
    . . . . . . . . . . . . . . . .
    . . . . . . 6 6 6 6 . . . . . .
    . . . . 6 6 6 5 5 6 6 6 . . . .
    . . . 7 7 7 7 6 6 6 6 6 6 . . .
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . .
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . .
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 .
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 .
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 .
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 .
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . .
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . .
    . . . 6 8 8 8 8 8 8 8 8 6 . . .
    . . . . 6 6 8 8 8 8 6 6 . . . .
    . . . . . . 6 6 6 6 . . . . . .
    . . . . . . . . . . . . . . . .
`
let LifeOrb: Image = img`
    . . . . . . . . . . . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . 4 4 4 5 5 4 4 4 . . . .
    . . . 3 3 3 3 4 4 4 4 4 4 . . .
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . .
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . .
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 .
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 .
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 .
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 .
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . .
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . .
    . . . 4 2 2 2 2 2 2 2 2 4 . . .
    . . . . 4 4 2 2 2 2 4 4 . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . . . . . . . . . . .
`
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 7 . . . . . . . .
    . . . . . . . 1 . . . . . . . .
    . . . . . . . 1 . . . . . . . .
    . . . . . . 1 9 1 . . . . . . .
    . . . . . 1 1 5 1 1 . . . . . .
    . . . . 1 1 1 5 1 1 1 . . . . .
    . . . . 1 1 1 1 1 1 1 . . . . .
    . . . . . . . 1 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.setPosition(scene.screenWidth() / 2, scene.screenHeight() * 1.8)
tiles.setTilemap(tiles.createTilemap(
    hex`1000100006060101010101010606000000000000060603010101020506060000000000000606010105010101060600000000000006060401010101010606000000000000060601010103010106060000000000000606010101010101060600000000000006060104010103010606000000000000060603010102010106060000000000000606040101010501060600000000000006060101010101010606000000000000060601010102010106060000000000000606010201010101060600000000000006060501010101010606000000000000060601010101030106060000000000000606010101030101060600000000000006060501010101050606000000000000`,
    img`
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 . . . . . . 2 2 . . . . . .
        2 2 2 2 2 2 2 2 2 2 . . . . . .
    `,
    [myTiles.tile0, myTiles.tile1, myTiles.tile2, myTiles.tile3, myTiles.tile4, myTiles.tile5, myTiles.tile6],
    TileScale.Sixteen
))
sprites.create(LifeOrb, SpriteKind.Life)
sprites.create(LifeOrb, SpriteKind.Life)
sprites.create(LifeOrb, SpriteKind.Life)
LifeList = sprites.allOfKind(SpriteKind.Life)
sprites.create(BomOrb, SpriteKind.Bomb)
sprites.create(BomOrb, SpriteKind.Bomb)
sprites.create(BomOrb, SpriteKind.Bomb)
BombList = sprites.allOfKind(SpriteKind.Bomb)
AButton = 0
game.onUpdate(function () {
    controller.moveSprite(mySprite, 100, 100)
    buttonA()
    buttonB()
})
game.onUpdate(function () {
    scene.centerCameraAt(0, mySprite.y - 40)
    drawLife()
    drawBomb()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . .
        . . . . . . . 7 . . . . . . .
        . . . . . . . 1 . . . . . . .
        . . . . . . . 1 . . . . . . .
        . . . . . . 1 9 1 . . . . . .
        . . . . . 1 1 5 1 1 . . . . .
        . . . . 1 1 1 5 1 1 1 . . . .
        . . . . 1 1 1 1 1 1 1 . . . .
        . . . . . . . 1 . . . . . . .
    `)
    drawGuage(BButton * 3 / 20)
})
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . . . . . a b a a . . . . . .
        . . . . . c b a f c a c . . . .
        . . . . c b b b f f a c c . . .
        . . . . b b f a b b a a c . . .
        . . . . c b f f b a f c a . . .
        . . . . . c a a c b b a . . . .
        . . . . . . c c c c . . . . . .
        . . . . . . . c . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    myEnemy.setVelocity(Math.randomRange(-10, 10), Math.randomRange(20, 50))
    myEnemy.data = Math.randomRange(3, 10);
})