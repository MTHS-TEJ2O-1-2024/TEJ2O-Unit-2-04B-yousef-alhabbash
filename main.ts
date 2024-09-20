/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: Sep 2024
 * This program will show our current temperature.
*/
let temprature = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)





input.onButtonPressed(Button.A, function () {
    temprature = input.temperature()
   
    
    basic.showString('Temprature is:')
    basic.showNumber(temprature)

    
    })
   