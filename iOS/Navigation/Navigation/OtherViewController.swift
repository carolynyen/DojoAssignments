//
//  OtherViewController.swift
//  Navigation
//
//  Created by Carolyn Yen on 3/14/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

class OtherViewController: UIViewController {
    @IBOutlet weak var label: UILabel!
    var labeltext: String?
    
    @IBAction func dismiss(_ sender: UIButton) {
        label.text = nil
        dismiss(animated: true, completion: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        label.text = labeltext
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
}

