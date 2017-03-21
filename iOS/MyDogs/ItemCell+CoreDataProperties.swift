//
//  ItemCell+CoreDataProperties.swift
//  MyDogs
//
//  Created by Carolyn Yen on 3/21/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import CoreData


extension ItemCell {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<ItemCell> {
        return NSFetchRequest<ItemCell>(entityName: "ItemCell")
    }

    @NSManaged public var nametext: String?
    @NSManaged public var treattext: String?
    @NSManaged public var colortext: String?
    @NSManaged public var image: NSData?

}
