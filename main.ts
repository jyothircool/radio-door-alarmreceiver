radio.onReceivedString(function (receivedString) {
    let received_string = ""
    if (received_string == "dooropen") {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    } else if (received_string == "door closed") {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(36)
basic.forever(function () {
	
})
