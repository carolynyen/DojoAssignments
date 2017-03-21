//
//  EditViewController.swift
//  MyDogs
//
//  Created by Carolyn Yen on 3/21/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import Foundation
import UIKit
import CoreData

protocol EditViewControllerDelegate: class {
    func edititem(name: String, color: String, treat: String, image: NSData, indexpath: NSIndexPath)
    func removeitem(indexpath: NSIndexPath)
}

class EditViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    let picker = UIImagePickerController()
    var indexpath: NSIndexPath?
    var name: String?
    var color: String?
    var treat: String?
    var picture: NSData?
    var delegate: EditViewControllerDelegate?
    
    @IBOutlet weak var namefield: UITextField!
    @IBOutlet weak var colorfield: UITextField!
    @IBOutlet weak var treatfield: UITextField!
    
    @IBAction func cancel(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBOutlet weak var imageView: UIImageView!
    
    @IBAction func doneedit(_ sender: Any) {
        let data = UIImagePNGRepresentation(imageView.image!) as NSData?
        self.delegate?.edititem(name: namefield.text!, color: colorfield.text!, treat: treatfield.text!, image: data!, indexpath: indexpath!)
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func changePhoto(_ sender: Any) {
        picker.allowsEditing = false
        picker.sourceType = .photoLibrary
        picker.mediaTypes = UIImagePickerController.availableMediaTypes(for: .photoLibrary)!
        present(picker, animated: true, completion: nil)
    }
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
        let chosenImage = info[UIImagePickerControllerOriginalImage] as! UIImage
        imageView.contentMode = .scaleAspectFit
        imageView.image = chosenImage
        dismiss(animated:true, completion: nil)
    }
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func deletedog(_ sender: Any) {
        self.delegate?.removeitem(indexpath: indexpath!)
        dismiss(animated: true, completion: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        picker.delegate = self
        if let img = UIImage(data: picture! as Data){
            imageView.image = img
        }
        namefield.text = name
        treatfield.text = treat
        colorfield.text = color
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
}
