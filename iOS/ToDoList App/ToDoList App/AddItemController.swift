//
//  ViewController.swift
//  ToDoList App
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit

protocol AddItemControllerDelegate: class {
    func additemcell(title: String, description: String, date: String)
}

class AddItemController: UIViewController {
    var delegate: AddItemControllerDelegate?

    @IBOutlet weak var titlefield: UITextField!
    @IBOutlet weak var descriptfield: UITextView!
    @IBOutlet weak var datepicker: UIDatePicker!
    
    @IBAction func additem(_ sender: Any) {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM/dd/yyyy"
        let dateString = dateFormatter.string(from: datepicker.date)
        self.delegate?.additemcell(title: titlefield.text!, description: descriptfield.text!, date: dateString)
        performSegue(withIdentifier: "Unwind", sender: self)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    

}

