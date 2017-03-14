//
//  Cell1.swift
//  AgingPeople
//
//  Created by Carolyn Yen on 3/14/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

class Cell1: UITableViewCell {
    @IBOutlet weak var namelabel: UILabel!
    @IBOutlet weak var agelabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
}
