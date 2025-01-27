def animacion_corazon():
    while True:
        basic.show_icon(IconNames.HEART)
        basic.pause(200)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(200)
        if input.button_is_pressed(Button.B):
            basic.clear_screen()
            break

def on_forever():
    if input.button_is_pressed(Button.A):
        animacion_corazon()
    if input.button_is_pressed(Button.AB):
        basic.show_string("Pulsa un botón")

basic.show_string("Pulsa un botón")
basic.forever(on_forever)
