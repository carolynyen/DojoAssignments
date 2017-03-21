//
//  CollectionViewController.swift
//  MyDogs
//
//  Created by Carolyn Yen on 3/21/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit
import CoreData

class CollectionViewController: UICollectionViewController, ViewControllerDelegate, EditViewControllerDelegate{
    
    var items = [ItemCell]()
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    func fetchallitems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "ItemCell")
        do {
            let result = try managedObjectContext.fetch(request)
            items = result as! [ItemCell]
        }
        catch { print("\(error)")
        }
    }
    
    override func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return items.count
    }
    
    override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "MyCell", for: indexPath) as!CustomCell
        cell.namebuttonlabel.setTitle(items[indexPath.row].nametext, for: [])
        cell.namebuttonlabel.isEnabled = false
        if let img = UIImage(data: items[indexPath.row].image! as Data){
            cell.background.image = img
        }
        return cell
    }
    
    override func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
       performSegue(withIdentifier: "EditSegue", sender: indexPath)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchallitems()
    }
    
    func itemsaved(name: String, treat: String, color: String, image: NSData){
        let item = NSEntityDescription.insertNewObject(forEntityName: "ItemCell", into: managedObjectContext) as! ItemCell
            item.nametext = name
            item.treattext = treat
            item.colortext = color
            item.image = image
            items.append(item)
        do {
            try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        collectionView?.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func unwind(_ segue: UIStoryboardSegue){
    }
    
    @IBAction func unwind2(_ segue: UIStoryboardSegue){
    }
    
    func edititem(name: String, color: String, treat: String, image: NSData, indexpath: NSIndexPath) {
        items[indexpath.row].nametext = name
        items[indexpath.row].colortext = color
        items[indexpath.row].treattext = treat
        items[indexpath.row].image = image
        do {
            try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        collectionView?.reloadData()
    }
    
    func removeitem(indexpath: NSIndexPath){
        managedObjectContext.delete(items[indexpath.row])
        do {
            try managedObjectContext.save()
        }
        catch {
            print("\(error)")
        }
        fetchallitems()
        collectionView?.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "AddDogSegue" {
            let destination = segue.destination as! ViewController
            destination.delegate = self
        }
        else if segue.identifier == "EditSegue" {
            let ip = sender as! NSIndexPath
            let navigationController = segue.destination as! UINavigationController
            let destination = navigationController.topViewController as! EditViewController
            destination.delegate = self
            destination.name = items[ip.row].nametext
            destination.color = items[ip.row].colortext
            destination.treat = items[ip.row].treattext
            destination.picture = items[ip.row].image
            destination.indexpath = ip
        }
    }
    
}
