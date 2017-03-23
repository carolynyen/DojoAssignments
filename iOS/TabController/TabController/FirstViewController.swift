//
//  ViewController.swift
//  TabController
//
//  Created by Carolyn Yen on 3/21/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit

class FirstViewController: UIViewController {
    var delegate: ViewControllerDelegate?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("first view controller viewDidLoad")
    }
    
    @IBAction func showaction(_ sender: Any) {
        let optionMenu = UIAlertController(title: nil, message: "Choose Option", preferredStyle: .actionSheet)
        let deleteAction = UIAlertAction(title: "Delete", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("File Deleted")
        })
        let saveAction = UIAlertAction(title: "Save", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            self.delegate?.itemsaved(by: self, thing: "derp")
            self.tabBarController?.selectedIndex = 0
            print("File Saved")
        })
        let cancelAction = UIAlertAction(title: "Cancel", style: .cancel, handler: {
            (alert: UIAlertAction!) -> Void in
            print("Cancelled")
        })
        optionMenu.addAction(deleteAction)
        optionMenu.addAction(saveAction)
        optionMenu.addAction(cancelAction)
        self.present(optionMenu, animated: true, completion: nil)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        print("FirstViewController viewWillAppear")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}

