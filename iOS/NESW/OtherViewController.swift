//
//  OtherViewController.swift
//  NESW
//
//  Created by Carolyn Yen on 3/15/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

class OtherViewController: UIViewController {
    var direction: String?
    
    @IBOutlet weak var buton: UIButton!

    @IBAction func goback(_ sender: Any) {
        performSegue(withIdentifier: "unwind", sender: self)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        buton.setTitle(direction, for: UIControlState.normal)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    
}
