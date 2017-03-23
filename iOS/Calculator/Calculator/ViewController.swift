//
//  ViewController.swift
//  Calculator
//
//  Created by Carolyn Yen on 3/9/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var numbers = ""
    var multiply = false
    var add = false
    var minus = false
    var divide = false
    var numbers2 = ""
    var decimal = false
    
    @IBOutlet weak var number: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        number.text = "0"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    @IBAction func multiplybutton(_ sender: UIButton) {
        multiply = true
        decimal = false
    }
    
    @IBAction func addbutton(_ sender: Any) {
        add = true
        decimal = false
    }
    @IBAction func dividebutton(_ sender: Any) {
        divide = true
        decimal = false
    }
    
    @IBAction func minusbutton(_ sender: Any) {
        minus = true
        decimal = false
    }
    
    @IBAction func button(_ sender: UIButton) {
        if numbers == "0" {
            numbers = ""
            numbers2 = ""
            decimal = false
        }
        if sender.tag == 19 {
            if multiply == true {
                numbers = String(Float(numbers)! * Float(numbers2)!)
                multiply = false
            }
            else if add == true {
                numbers = String(Float(numbers)! + Float(numbers2)!)
                add = false
            }
            else if minus == true {
                numbers = String(Float(numbers)! - Float(numbers2)!)
                minus = false
            }
            else if divide == true {
                numbers = String(Float(numbers)! / Float(numbers2)!)
                divide = false
            }
            number.text = numbers
            numbers2 = ""
        }
        else if sender.tag == 11 {
            numbers = "0"
            numbers2 = "0"
            number.text = "0"
            decimal = false
        }
        else {
            if multiply == true || add == true || minus == true || divide == true {
                if sender.tag == 10 && decimal == false {
                    numbers2 += "."
                    decimal = true
                }
                else if sender.tag == 12{
                    
                    if numbers2[numbers2.startIndex] == "-" {
                        numbers2.remove(at: numbers2.startIndex)
                    }
                    else {
                        numbers2 = "-" + numbers2
                    }
                }
                else if sender.tag != 10 {
                    numbers2 += String(sender.tag)
                }
                number.text = numbers2
            }
            else {
                if sender.tag == 10 && decimal == false {
                    numbers += "."
                    decimal = true
                }
                else if sender.tag == 12{
                    
                    if numbers[numbers.startIndex] == "-" {
                       numbers.remove(at: numbers.startIndex)
                    }
                    else {
                        numbers = "-" + numbers
                    }
                }
                else if sender.tag != 10{
                    numbers += String(sender.tag)
                }
                number.text = numbers
            }
        }
    }

}

