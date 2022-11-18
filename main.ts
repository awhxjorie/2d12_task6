let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = input.temperature()
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    a = input.temperature()
    b = 32 + (input.temperature() + 1.8)
    basic.showNumber(b)
})
basic.forever(function () {
    led.setBrightness(input.lightLevel())
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
