// Add your code here


//% color="#AA278D"
//% groups="['Input', 'Output', 'AnalogInput', 'AnalogOutput', 'ComplexInput', 'ComplexOutput']"
namespace NPNBitKit {
    //% block="Nút $pinName|được nhấn?"
    //% group=Input
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% weight=50
    export function Button(pinName: DigitalPin): boolean {
        if (pins.digitalReadPin(pinName) == 0) return true
        else return false
    }

    //% block="Nút cảm ứng $pinName|được nhấn?"
    //% group=Input
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% weight=50
    export function ButtonTouch(pinName: DigitalPin): boolean {
        if (pins.digitalReadPin(pinName) == 1) return true
        else return false
    }

    //% block="Cửa $pinName|được mở?"
    //% group=Input
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% weight=50
    export function ButtonDoorOpen(pinName: DigitalPin): boolean {
        if (pins.digitalReadPin(pinName) == 1) return true
        else return false
    }

    //% block="Bật đèn đỏ %pinNameRed %activeRed và đèn xanh %pinNameGreen %activeGreen "
    //% group=Output
    //% pinNameRed.fieldEditor="gridpicker" pinNameGreen.fieldEditor="gridpicker"
    //% pinNameRed.fieldOptions.width=220 pinNameGreen.fieldOptions.width=220
    //% pinNameRed.fieldOptions.columns=4 pinNameGreen.fieldOptions.columns=4
    //% activeRed.shadow="toggleOnOff" activeGreen.shadow="toggleOnOff"
    //% inlineInputMode=inline
    export function Led2Color(pinNameRed: DigitalPin, activeRed: boolean, pinNameGreen: DigitalPin, activeGreen: boolean) {
        if (activeRed) pins.digitalWritePin(pinNameRed, 1)
        else pins.digitalWritePin(pinNameRed, 0)
        if (activeGreen) pins.digitalWritePin(pinNameGreen, 1)
        else pins.digitalWritePin(pinNameGreen, 0)
    }

    //% block="Bật đèn đỏ %pinNameRed %valueRed và đèn xanh %pinNameGreen %valueGreen "
    //% group=Output
    //% pinNameRed.fieldEditor="gridpicker" pinNameGreen.fieldEditor="gridpicker"
    //% pinNameRed.fieldOptions.width=220 pinNameGreen.fieldOptions.width=220
    //% pinNameRed.fieldOptions.columns=4 pinNameGreen.fieldOptions.columns=4
    //% pinNameGreen.defl=Digital.P1
    //% valueRed.shadow="speedPicker" valueGreen.shadow="speedPicker"
    //% valueRed.min=0 valueRed.max=100 
    //% valueGreen.min=0 valueGreen.max=100
    //% inlineInputMode=inline
    export function Led2ColorAnalog(pinNameRed: AnalogPin, valueRed: number, pinNameGreen: AnalogPin, valueGreen: number) {
        pins.analogWritePin(pinNameRed, valueRed)
        pins.analogWritePin(pinNameGreen, valueGreen)
    }

    //% block="Bật loa tại chân %pinName %active ||trong %duration ms "
    //% group=Output
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% active.shadow="toggleOnOff"
    //% duration.shadow=timePicker
    //% duration.defl=0
    export function Buzzer(pinName: DigitalPin, activeBuzzer: boolean, duration: number = 0) {
        if (activeBuzzer) pins.digitalWritePin(pinName, 1)
        else pins.digitalWritePin(pinName, 0)
        if (duration > 0) {
            basic.pause(duration)
            pins.digitalWritePin(pinName, 0)
        }
    }

    //% block="Bật rờ le tại chân %pinName %active ||trong %duration ms "
    //% group=Output
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% active.shadow="toggleOnOff"
    //% duration.shadow=timePicker
    //% duration.defl=0
    export function Relay(pinName: DigitalPin, active: boolean, duration: number = 0) {
        if (active) pins.digitalWritePin(pinName, 1)
        else pins.digitalWritePin(pinName, 0)
        if (duration > 0) {
            basic.pause(duration)
            pins.digitalWritePin(pinName, 0)
        }
    }

    //% block="Độ ẩm đất $pinName"
    //% group=AnalogInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=3
    export function AnalogSoilMosture(pinName: AnalogPin): number {
        return pins.analogReadPin(pinName)
    }

    //% block="Ánh sáng $pinName"
    //% group=AnalogInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=3
    export function AnalogLight(pinName: AnalogPin): number {
        return pins.analogReadPin(pinName)
    }

    //% block="Âm thanh $pinName"
    //% group=AnalogInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=3
    export function AnalogSound(pinName: AnalogPin): number {
        return pins.analogReadPin(pinName)
    }

    //% block="Độ rung $pinName"
    //% group=ComplexInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    export function Vibration(pinName: AnalogPin): number {
        return 0
    }

    //% block="DHT11: nhiệt độ $pinName|| bằng độ F $active"
    //% group=ComplexInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% active.shadow=toggleYesNo
    //% active.defl=no
    export function DHT11Temp(pinName: DigitalPin, active: boolean = false): number {
        if (active) {
            return 0
        }
        else {
            return 1
        }
    }
    //% block="DHT11: độ ẩm không khí $pinName %"
    //% group=ComplexInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    export function DHT11Hum(pinName: DigitalPin): number {
        return 1
    }
}