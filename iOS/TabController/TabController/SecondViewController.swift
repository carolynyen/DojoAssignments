//
//  SecondViewController.swift
//  TabController
//
//  Created by Carolyn Yen on 3/21/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

protocol ViewControllerDelegate: class {
    func itemsaved()
}

class SecondViewController: UIViewController, ViewControllerDelegate{
    
    func itemsaved() {
        print("hi")
    }

    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("SecondViewController viewDidLoad")
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        print("SecondViewController viewWillAppear")
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    
}
