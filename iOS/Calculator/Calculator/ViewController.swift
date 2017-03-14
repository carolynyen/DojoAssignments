//
//  ViewController.swift
//  Calculator
//
//  Created by Carolyn Yen on 3/9/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var numbers = "0"
    var multiply = false
    var temp = ""
    var numbers2 = ""
    
    @IBOutlet weak var number: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    @IBAction func multiplybutton(_ sender: UIButton) {
        multiply = true
        temp = numbers
        
    }
    @IBAction func button(_ sender: UIButton) {
        if numbers == "0" {
            numbers = ""
        }
        else {
            numbers += String(sender.tag)
        }
        number.text = numbers
    }

}

