//
//  ViewController.swift
//  Tipster
//
//  Created by Carolyn Yen on 3/8/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var price:String = "0"
    var group = 1
    var decimal = false
    var decimalcount = 0
    var tip = 5
    var lefttip = 0
    var righttip = 10
    
    @IBOutlet weak var LLlabel: UILabel!
    @IBOutlet weak var LUlabel: UILabel!
    @IBOutlet weak var RLlabel: UILabel!
    @IBOutlet weak var RUlabel: UILabel!
    @IBOutlet weak var MUlabel: UILabel!
    @IBOutlet weak var MLlabel: UILabel!
    @IBOutlet weak var pricelabel: UILabel!
    @IBOutlet weak var middletip: UILabel!
    @IBOutlet weak var rightip: UILabel!
    @IBOutlet weak var leftip: UILabel!
    @IBOutlet weak var grouplabel: UILabel!
    
    @IBAction func tipslider(_ sender: UISlider) {
        tip = Int(sender.value)
        lefttip = tip - 5
        righttip = tip + 5
        middletip.text = String(tip) + String("%")
        rightip.text = String(righttip) + String("%")
        leftip.text = String(lefttip) + String("%")
        updatenumbers()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        pricelabel.text = price
        grouplabel.text = "Group size: 1"
        decimal = false
        updatenumbers()
    }

    @IBAction func groupslider(_ sender: UISlider) {
        grouplabel.text = "Group size: " + String(Int(sender.value))
        group = Int(sender.value)
        updatenumbers()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func updatenumbers(){
        if let temp = Float(price) {
            let tipamount = temp * (Float(tip)/(100))
            MLlabel.text = String(format: "%.2f", (tipamount+temp/Float(group)))
            MUlabel.text = String(format: "%.2f", tipamount/Float(group))
            let leftamount = temp * (Float(lefttip)/(100))
            LUlabel.text = String(format: "%.2f", leftamount/Float(group))
            LLlabel.text = String(format: "%.2f", leftamount+temp/Float(group))
            let rightamount = temp * (Float(righttip)/(100))
            RUlabel.text = String(format: "%.2f", rightamount/Float(group))
            RLlabel.text = String(format: "%.2f", rightamount+temp/Float(group))
        }
    }

    @IBAction func buttonpress(_ sender: UIButton) {
        if sender.tag == 9 {
            price = "0"
            pricelabel.text = price
            decimal = false
            decimalcount = 0
        }
        else if price.characters.count < 6 && decimalcount < 3 {
            if sender.tag == 11 && decimal == false && price != "0" && price != "" {
                    price += "."
                    pricelabel.text = price
                    decimal = true
                decimalcount = 0
            }
            if price == "0" && sender.tag != 11{
                    price = ""
                }
            if decimal == true {
                decimalcount += 1
            }
            if sender.tag == 0 {
                price += "7"
            }
            else if sender.tag == 1 {
                price += "8"
            }
            else if sender.tag == 2 {
                price += "9"
            }
            else if sender.tag == 3 {
                price += "4"
            }
            else if sender.tag == 4 {
                price += "5"
            }
            else if sender.tag == 5 {
                price += "6"
            }
            else if sender.tag == 6 {
                price += "1"
            }
            else if sender.tag == 7 {
                price += "2"
            }
            else if sender.tag == 8 {
                price += "3"
            }
            else if sender.tag == 10 {
                price += "0"
            }
            pricelabel.text = price
        }
        updatenumbers()
    }

}











