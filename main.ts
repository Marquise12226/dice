input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
