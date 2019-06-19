// Add your code here
// https://github.com/chipfc/NPNBitKit


//% color="#AA278D"
//% groups="['Input', 'Output', 'AnalogInput', 'AnalogOutput', 'ComplexInput', 'ComplexOutput']"
namespace NPNBitKit {
    //DHT11 variable
    let _temperature: number = 0.0
    let _humidity: number = 0.0
    let _readSuccessful: boolean = false



    //% block="Nút $pinName| được nhấn?"
    //% group=Input
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    //% weight=50
    export function Button(pinName: DigitalPin): boolean {
        pins.setPull(pinName, PinPullMode.PullUp)
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
        pins.setPull(pinName, PinPullMode.PullUp)
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
        pins.setPull(pinName, PinPullMode.PullUp)
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

    //% block="Độ rung 1 $pinName"
    //% group=ComplexInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    export function Vibration(pinName: DigitalPin): number {
        let startTime = input.runningTime()
        let pulseCount = 0
        pins.setPull(pinName, PinPullMode.PullUp)
        while (input.runningTime() - startTime < 100) {
            if (pins.digitalReadPin(pinName) == 0) {
                pulseCount += 1
            }
        }
        return pulseCount
    }

    //% block="DHT11: Đọc cảm biến tại $pinName"
    //% group=ComplexInput
    //% pinName.fieldEditor="gridpicker"
    //% pinName.fieldOptions.width=220
    //% pinName.fieldOptions.columns=4
    export function DHT11Read(pinName: DigitalPin) {
        DHT11query(pinName)
    }

    //% block="DHT11: nhiệt độ || bằng độ F $active"
    //% group=ComplexInput
    //% active.shadow=toggleYesNo
    //% active.defl=no
    export function DHT11Temp(active: boolean = false): number {
        if (active) {
            //chuyen qua do F

            if (_readSuccessful) return Math.round(_temperature * 1.8 + 32)
            else return -999
        }
        else {
            if (_readSuccessful) return Math.round(_temperature)
            else return -999
        }
    }

    //% block="DHT11: độ ẩm "
    //% group=ComplexInput
    export function DHT11Hum(): number {
        if (_readSuccessful) return _humidity
        else return -999
    }

    function DHT11query(dataPin: DigitalPin) {
        //initialize
        let startTime: number = 0
        let endTime: number = 0
        let checksum: number = 0
        let checksumTmp: number = 0
        let dataArray: boolean[] = []
        let resultArray: number[] = []
        for (let index = 0; index < 40; index++) dataArray.push(false)
        for (let index = 0; index < 5; index++) resultArray.push(0)
        _humidity = -999.0
        _temperature = -999.0
        _readSuccessful = false
        startTime = input.runningTimeMicros()
        //request data
        pins.digitalWritePin(dataPin, 0) //begin protocol
        basic.pause(18)
        //if (pullUp) pins.setPull(dataPin, PinPullMode.PullUp) //pull up data pin if needed
        pins.setPull(dataPin, PinPullMode.PullUp)
        pins.digitalReadPin(dataPin)
        while (pins.digitalReadPin(dataPin) == 1);
        while (pins.digitalReadPin(dataPin) == 0); //sensor response
        while (pins.digitalReadPin(dataPin) == 1); //sensor response
        //read data (5 bytes)
        for (let index = 0; index < 40; index++) {
            while (pins.digitalReadPin(dataPin) == 1);
            while (pins.digitalReadPin(dataPin) == 0);
            control.waitMicros(28)
            //if sensor pull up data pin for more than 28 us it means 1, otherwise 0
            if (pins.digitalReadPin(dataPin) == 1) dataArray[index] = true
        }
        endTime = input.runningTimeMicros()
        //convert byte number array to integer
        for (let index = 0; index < 5; index++)
            for (let index2 = 0; index2 < 8; index2++)
                if (dataArray[8 * index + index2]) resultArray[index] += 2 ** (7 - index2)
        //verify checksum
        checksumTmp = resultArray[0] + resultArray[1] + resultArray[2] + resultArray[3]
        checksum = resultArray[4]
        if (checksumTmp >= 512) checksumTmp -= 512
        if (checksumTmp >= 256) checksumTmp -= 256
        if (checksum == checksumTmp) _readSuccessful = true

        _humidity = resultArray[0] + resultArray[1] / 100
        _temperature = resultArray[2] + resultArray[3] / 100
    }
}
