//
//  OtherViewController.swift
//  MadLibs
//
//  Created by Carolyn Yen on 3/16/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation

import UIKit

class OtherViewController: UIViewController {

    @IBOutlet weak var adjective: UITextField!
    @IBOutlet weak var verb1: UITextField!
    @IBOutlet weak var verb2: UITextField!
    @IBOutlet weak var noun: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        adjective.placeholder = "adjective"
        verb1.placeholder = "verb"
        verb2.placeholder = "verb"
        noun.placeholder = "noun"
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func submit(_ sender: Any) {
        performSegue(withIdentifier: "unwind", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let destination = segue.destination as? ViewController {
            destination.adjective = adjective.text!
            destination.verb1 = verb1.text!
            destination.verb2 = verb2.text!
            destination.noun = noun.text!
        }
    }
}

