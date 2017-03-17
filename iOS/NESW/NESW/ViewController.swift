//
//  ViewController.swift
//  NESW
//
//  Created by Carolyn Yen on 3/15/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var direction: String?
    
    @IBAction func pressedbutton(_ sender: UIButton) {
        direction = sender.titleLabel!.text
        performSegue(withIdentifier: "GoDirection", sender: nil)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    @IBAction func unwind(_ segue: UIStoryboardSegue, for: UIViewController) {
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let destination = segue.destination as? OtherViewController {
            destination.direction = direction
        }
    }
}

