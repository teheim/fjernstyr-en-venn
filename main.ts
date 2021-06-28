input.onButtonPressed(Button.A, function () {
    radio.sendString("Hemmelig beskjed")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
    radio.setGroup(1)
})
