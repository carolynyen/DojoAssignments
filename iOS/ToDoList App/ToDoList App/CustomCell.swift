//
//  CustomCell.swift
//  ToDoList App
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

protocol CustomCellDelegate: class {
//    func additemcell(title: String, description: String, date: String)
}

class CustomCell: UITableViewCell {
    @IBOutlet weak var titlelabel: UILabel!
    @IBOutlet weak var datelabel: UILabel!
    @IBOutlet weak var descriptlabel: UILabel!
}
