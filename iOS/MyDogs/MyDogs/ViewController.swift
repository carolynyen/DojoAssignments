//
//  ViewController.swift
//  MyDogs
//
//  Created by Carolyn Yen on 3/21/17.
//  Copyright © 2017 frandz. All rights reserved.
//

import UIKit

protocol ViewControllerDelegate: class {
    func itemsaved(name: String, treat: String, color: String, image: NSData)
}

class ViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    let picker = UIImagePickerController()
    var delegate: ViewControllerDelegate?

    @IBOutlet weak var treatfield: UITextField!
    @IBOutlet weak var colorfield: UITextField!
    @IBOutlet weak var namefield: UITextField!
    
    @IBOutlet weak var myImageView: UIImageView!
    
    @IBAction func AddDog(_ sender: Any) {
        let data = UIImagePNGRepresentation(myImageView.image!) as NSData?
        self.delegate?.itemsaved(name: namefield.text!, treat: treatfield.text!, color: colorfield.text!, image: data!)
        performSegue(withIdentifier: "Unwind", sender: self)
    }
    
    @IBAction func photoFromLibrary(_ sender: Any) {
        picker.allowsEditing = false
        picker.sourceType = .photoLibrary
        picker.mediaTypes = UIImagePickerController.availableMediaTypes(for: .photoLibrary)!
        present(picker, animated: true, completion: nil)
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        picker.delegate = self
        treatfield.placeholder = "Dogs Favorite Treat"
        colorfield.placeholder = "Dog Color"
        namefield.placeholder = "Dogs Name"
    }
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
        let chosenImage = info[UIImagePickerControllerOriginalImage] as! UIImage
        myImageView.contentMode = .scaleAspectFit
        myImageView.image = chosenImage
        dismiss(animated:true, completion: nil)
    }
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        dismiss(animated: true, completion: nil)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}

