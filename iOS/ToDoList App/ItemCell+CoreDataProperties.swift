//
//  ItemCell+CoreDataProperties.swift
//  ToDoList App
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import CoreData


extension ItemCell {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<ItemCell> {
        return NSFetchRequest<ItemCell>(entityName: "ItemCell")
    }

    @NSManaged public var datetext: String?
    @NSManaged public var descriptiontext: String?
    @NSManaged public var titletext: String?

}
