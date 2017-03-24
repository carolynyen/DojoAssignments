//
//  EditViewController.swift
//  IOSContactList
//
//  Created by Carolyn Yen on 3/24/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit
import CoreData

class EditViewController: UIViewController {
    var delegate: EditViewControllerDelegate?
    var firstname: String?
    var lastname: String?
    var number: String?
    var indexpath: NSIndexPath?
    
    @IBOutlet weak var FirstNameField: UITextField!
    @IBOutlet weak var LastNameField: UITextField!
    @IBOutlet weak var NumberField: UITextField!

    @IBAction func CancelButton(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func SaveButton(_ sender: Any) {
        self.delegate?.edititem(by: self, firstname: FirstNameField.text!, lastname: LastNameField.text!, number: NumberField.text!, at: indexpath!)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        FirstNameField.text = firstname!
        LastNameField.text = lastname!
        NumberField.text = number!
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    
}
