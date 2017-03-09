//
//  ViewController.swift
//  IOSQuiz2
//
//  Created by Carolyn Yen on 3/7/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var buttonk: UILabel!
    @IBOutlet weak var labelk: UILabel!

    @IBAction func buttonk(_ sender: Any) {
        buttonk.text = "Hello"
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        labelk.text = "Hello"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

