//
//  ContactItem+CoreDataProperties.swift
//  IOSContactList
//
//  Created by Carolyn Yen on 3/24/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import CoreData


extension ContactItem {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<ContactItem> {
        return NSFetchRequest<ContactItem>(entityName: "ContactItem")
    }

    @NSManaged public var firstname: String?
    @NSManaged public var number: String?
    @NSManaged public var lastname: String?

}
