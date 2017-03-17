//
//  AddTableViewControllerDelegate.swift
//  BucketList
//
//  Created by Carolyn Yen on 3/15/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

protocol AddTableViewControllerDelegate: class {
    func cancelpressed(by controller: UITableViewController)
    func itemsaved(by controller: UITableViewController, with text: String, at IndexPath: NSIndexPath?)
}
