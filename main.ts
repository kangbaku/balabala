input.onButtonPressed(Button.A, function () {
    base.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    bala = game.createSprite(base.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 4; index++) {
        bala.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    if (bala.isTouching(target)) {
        game.addScore(1)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.InBackground)
    } else {
        game.removeLife(1)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    }
    bala.delete()
    target.delete()
    target = game.createSprite(randint(0, 4), 0)
})
input.onButtonPressed(Button.B, function () {
    base.change(LedSpriteProperty.X, 1)
})
let bala: game.LedSprite = null
let target: game.LedSprite = null
let base: game.LedSprite = null
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
game.setScore(0)
game.setLife(5)
basic.showNumber(0)
base = game.createSprite(randint(0, 4), 4)
target = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (game.isGameOver()) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
    }
})
basic.forever(function () {
	
})
