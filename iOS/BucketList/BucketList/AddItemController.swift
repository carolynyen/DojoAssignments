//
//  AddItemController.swift
//  BucketList
//
//  Created by Carolyn Yen on 3/15/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

class AddItemController: UITableViewController {
    
    weak var delegate: AddTableViewControllerDelegate?
    var item: String?
    var indexpath: NSIndexPath?
    
    @IBOutlet weak var itemtextfield: UITextField!
    
    @IBAction func cancelpressed(_ sender: Any) {
        delegate?.cancelpressed(by: self)
    }
    
    @IBAction func savepressed(_ sender: Any) {
        let text = itemtextfield.text!
        delegate?.itemsaved(by: self, with: text, at: indexpath)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        itemtextfield.text = item
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
   
}
