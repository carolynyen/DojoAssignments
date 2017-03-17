//
//  ViewController.swift
//  MadLibs
//
//  Created by Carolyn Yen on 3/15/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var adjective: String?
    var verb1: String?
    var verb2: String?
    var noun: String?

    @IBOutlet weak var label: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func unwind(_ segue: UIStoryboardSegue, towardsViewController subsequentVC: UIViewController) {
        label.text! = "We are having a perfectly \(adjective!) time now. Later we will \(verb1!) and \(verb2!) in the \(noun!)."
    }


}

