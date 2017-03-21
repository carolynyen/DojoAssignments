//
//  CustomCell.swift
//  Binary Counter
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit


protocol CustomCellDelegate: class {
    func minuspressed(with value: Int)
    func pluspressed(with value: Int)
}

class CustomCell: UITableViewCell {
    weak var delegate: CustomCellDelegate?
    
    
    @IBOutlet weak var number: UILabel!

    @IBAction func buttonpressed(_ sender: UIButton) {
        let value: Int
        if sender.titleLabel?.text! == "+" {
            value = Int(self.number.text!)!
            delegate?.pluspressed(with: value)
        }
        else {
            value = (-1 * Int(self.number.text!)!)
            delegate?.minuspressed(with: value)
        }
    }
    
}
