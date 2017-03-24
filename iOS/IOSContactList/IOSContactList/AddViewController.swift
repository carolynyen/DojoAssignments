//
//  AddViewController.swift
//  IOSContactList
//
//  Created by Carolyn Yen on 3/24/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit
import CoreData

class AddViewController: UIViewController {
    var delegate: AddViewControllerDelegate?
    
    @IBOutlet weak var NameField: UITextField!
    @IBOutlet weak var LastNameField: UITextField!
    @IBOutlet weak var NumberField: UITextField!
    
    @IBAction func CancelButton(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func SaveButton(_ sender: Any) {
        if NameField.text!.characters.count > 0 || LastNameField.text!.characters.count > 0 || NumberField.text!.characters.count > 0 {
            self.delegate?.additem(by: self, firstname: NameField.text!, lastname: LastNameField.text!, number: NumberField.text!)
        }
        else {
            dismiss(animated: true, completion: nil)
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    
}
