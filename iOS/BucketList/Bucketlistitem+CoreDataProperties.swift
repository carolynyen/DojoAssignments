//
//  Bucketlistitem+CoreDataProperties.swift
//  BucketList
//
//  Created by Carolyn Yen on 3/20/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import CoreData


extension Bucketlistitem {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<Bucketlistitem> {
        return NSFetchRequest<Bucketlistitem>(entityName: "Bucketlistitem")
    }

    @NSManaged public var text: String?

}
