//
//  EditViewControllerDelegate.swift
//  IOSContactList
//
//  Created by Carolyn Yen on 3/24/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

protocol EditViewControllerDelegate: class {
    func edititem(by controller: EditViewController, firstname: String, lastname: String, number: String, at indexPath: NSIndexPath)
}
