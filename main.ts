function animacion_corazon () {
    while (true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            break;
        }
    }
}
basic.showString("Pulsa un botón")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        animacion_corazon()
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("Pulsa un botón")
    }
})
