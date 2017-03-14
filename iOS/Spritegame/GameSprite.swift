//
//  GameSprite.swift
//  Spritegame
//
//  Created by Carolyn Yen on 3/10/17.
//  Copyright © 2017 Carolyn Yen. All rights reserved.
//

import Foundation
import SpriteKit

protocol GameSprite {
    var textureAtlas:SKTextureAtlas { get set }
    var initialSize: CGSize { get set }
    func onTap()
}
