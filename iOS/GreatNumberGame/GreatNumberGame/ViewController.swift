//
//  ViewController.swift
//  GreatNumberGame
//
//  Created by Carolyn Yen on 3/9/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var random = Int(arc4random_uniform(100)+1)
    var guessnum = 0
    
    @IBOutlet weak var inputnumber: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func submit(_ sender: UIButton) {
        let alert = UIAlertController(title: "Incorrect", message: "message", preferredStyle: UIAlertControllerStyle.alert)
        if let temp = Int(inputnumber.text!) {
                guessnum = temp
        }
        else {
            guessnum = 0
        }
        var status = true
        if guessnum == 0  {
            alert.message = "Invalid input!"
            status = false
        }
        else if guessnum < random {
            alert.message = "\(guessnum) is too low"
            status = false
        }
        else if guessnum > random {
            alert.message = "\(guessnum) is too high"
            status = false
        }
        if status == false {
            alert.view.backgroundColor = UIColor.red
            alert.addAction(UIAlertAction(title: "Guess Again", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        }
        else {
            alert.message = "\(guessnum) is correct!!!"
            alert.title = "Correct"
            alert.view.backgroundColor = UIColor.green
            alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
            resetgame()
        }
        inputnumber.text = nil
    }
    func resetgame(){
        random = Int(arc4random_uniform(100)+1)
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}

