function showTheTimeOnALcdDisplay () {
    wH = h
    am = "am"
    wM = convertToText(m)
    if (m < 10) {
        wM = "0" + m
    }
    if (wH > 12) {
        am = "pm"
        wH += -12
    }
    I2C_LCD1602.ShowString("" + wH + ":" + wM + " " + am + " ", 0, 0)
}
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    h += 1
    if (h > 23) {
        h = 0
    }
    showTheTimeOnALcdDisplay()
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    m += 1
    if (m > 23) {
        m = 0
    }
    showTheTimeOnALcdDisplay()
})
let diff = 0
let new_ms = 0
let wM = ""
let am = ""
let wH = 0
let m = 0
let h = 0
h = 0
m = 0
let s = 0
let mde = 1
let old_ms = 0
I2C_LCD1602.LcdInit(0)
basic.forever(function () {
    new_ms = input.runningTime()
    diff = new_ms - old_ms
    if (diff > 1000) {
        s += 1
    }
    if (s > 59) {
        s = 0
        m += 1
        if (mde == 1) {
            showTheTimeOnALcdDisplay()
        }
    }
    if (m > 59) {
        m = 0
        h += 1
    }
    if (h > 23) {
        h = 0
    }
})
