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
    func itemsaved(by controller: FirstViewController, thing: String)
}

class SecondViewController: UIViewController, ViewControllerDelegate{
    
    @IBOutlet weak var label: UILabel!
    
    func itemsaved(by: FirstViewController, thing: String) {
        label.text = thing
        print("hi \(thing)")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("SecondViewController viewDidLoad")
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        print("SecondViewController viewWillAppear")
        let viewController = self.tabBarController?.viewControllers?[1] as? FirstViewController
        viewController?.delegate = self
        self.tabBarController?.selectedIndex = 1
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
}
