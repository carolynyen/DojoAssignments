//
//  ViewController.swift
//  coldcall2
//
//  Created by Carolyn Yen on 3/8/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var count: Int = 0
    let names = ["Me", "Glen", "Urian","Ali", "Nikki"]
    var colornumber: Int = 0

    @IBOutlet weak var namebox: UILabel!
    @IBOutlet weak var numberbox: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        numberbox.isHidden = true
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    @IBAction func coldcall(_ sender: UIButton) {
        count = Int(arc4random_uniform(UInt32(names.count)))
        namebox.text = names[count]
        numberbox.isHidden = false
        colornumber = Int(arc4random_uniform(UInt32(5))+1)
        numberbox.text = String(colornumber)
        if colornumber == 1 || colornumber == 2 {
            numberbox.textColor = UIColor.red
        }
        else if colornumber == 3 || colornumber == 4 {
            numberbox.textColor = UIColor.orange
        }
        else if colornumber == 5 {
            numberbox.textColor = UIColor.green
        }
    }


}

