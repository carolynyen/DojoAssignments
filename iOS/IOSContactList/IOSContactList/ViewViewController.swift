//
//  ViewController.swift
//  IOSContactList
//
//  Created by Carolyn Yen on 3/24/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit
import CoreData

class ViewViewController: UIViewController {
    var number: String?
    var firstname: String?
    var lastname: String?

    @IBOutlet weak var NumberLabel: UILabel!
    @IBOutlet weak var NameLabel: UILabel!
    
    @IBAction func Done(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = firstname!
        NameLabel.text = firstname! + " " + lastname!
        NumberLabel.text = number!
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}

