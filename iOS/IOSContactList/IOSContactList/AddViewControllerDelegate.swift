//
//  AddViewControllerDelegate.swift
//  IOSContactList
//
//  Created by Carolyn Yen on 3/24/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit

protocol AddViewControllerDelegate: class {
    func additem(by controller: AddViewController, firstname: String, lastname: String, number: String)
}
