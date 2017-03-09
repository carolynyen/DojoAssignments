//
//  ViewController.swift
//  coldcall
//
//  Created by Carolyn Yen on 3/8/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    let names = ["Me", "Glen", "Ali", "Nikki"]
    var count: Int = 0

    @IBAction func coldcall(_ sender: UIButton) {
        count = Int(arc4random_uniform(UInt32(names.count)))
        textbox.text = names[count]
    }
    @IBOutlet weak var textbox: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        coldbutton.backgroundColor = UIColor.cyan
    }

    @IBOutlet weak var coldbutton: UIButton!
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

