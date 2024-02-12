import { map } from "nanostores";

import { Setting_Type } from "../settings_type";

export const settings = map({
    // rich presence
    disableRichPresence: { // disable Discord and Steam Presence
        key: 'disableRichPresence',
        type: Setting_Type.bool,
        value: false
    },
    // CACHE
    // location
    cache_directory: { // path of VRChat Cache (Avatars and Worlds downloaded)
        key: 'cache_directory',
        type: Setting_Type.str,
        value: "%appdata%/../LocalLow/VRChat/VRChat/"
    },
    // size and expity time
    cache_size: { // in Gb - 20^
        key: 'cache_size',
        type: Setting_Type.int,
        value: 20,
        unit: 'Gb'
    },
    cache_expiry_delay: { // in days - 30^
        key: 'cache_expiry_delay',
        type: Setting_Type.int,
        value: 30,
        unit: 'days'
    },
    // avatar particle system limits
    betas: { // adding or removing the string "particle_system_limiter" will enable/disable the limiter system
        key: 'betas',
        type: Setting_Type.bool,
        value: ["particle_system_limiter"],
        checkedValue: ["particle_system_limiter"],
        uncheckedValue: []
    },
    ps_max_particles: { // max particles a single particle system can spawn
        key: 'ps_max_particles',
        type: Setting_Type.int,
        value: 50000,
        unit: 'particle(s)'
    },
    ps_max_systems: { // max particle systems in current instance
        key: 'ps_max_systems',
        type: Setting_Type.int,
        value: 200,
        unit: 'particles system(s)'
    },
    ps_max_emission: { // max emission a single particle system is allowed
        key: 'ps_max_emission',
        type: Setting_Type.int,
        value: 5000,
        unit: 'emissions per particle'
    },
    ps_max_total_emission: { // Max emission allowed between all particle systems on an avatar
        key: 'ps_max_total_emission',
        type: Setting_Type.int,
        value: 40000,
        unit: 'total emissions'
    },
    ps_mesh_particle_divider: { // the mesh particle penalty is calculated using the highest poly mesh on them divided by this value, the resulting value divides the max particle allowance for the particle system
        key: 'ps_mesh_particle_divider',
        type: Setting_Type.int,
        value: 60,
        unit: ''
    },
    ps_mesh_particle_poly_limit: { // the max poly count a mesh on a particle system can be
        key: 'ps_mesh_particle_poly_limit',
        type: Setting_Type.int,
        value: 50000,
        unit: 'polygons per particle system'
    },
    ps_collision_penalty_high: { // the penalty for high quality collision on a particle system, the resulting value divides the max particle allowance for the particle system
        key: 'ps_collision_penalty_high',
        type: Setting_Type.int,
        value: 50,
        unit: ''
    },
    ps_collision_penalty_med: { // the penalty for medium quality collision on a particle system, the resulting value divides the max particle allowance for the particle system
        key: 'ps_collision_penalty_med',
        type: Setting_Type.int,
        value: 30,
        unit: ''
    },
    ps_collision_penalty_low: { // the penalty for low quality collision on a particle system, the resulting value divides the max particle allowance for the particle system
        key: 'ps_collision_penalty_low',
        type: Setting_Type.int,
        value: 10,
        unit: ''
    },
    ps_trails_penalty: { // the penalty for having trails enabled on the particle system, the resulting value divides the max particle allowance for the particle system
        key: 'ps_trails_penalty',
        type: Setting_Type.int,
        value: 10,
        unit: ''
    },
    // avatar dynamic bones limit
    dynamic_bone_max_affected_transform_count: { // if an avatar has more Dynamic Bone Affected Transforms than is listed here, all Dynamic Bone and Dynamic Bone Collider components will be disabled
        key: 'dynamic_bone_max_affected_transform_count',
        type: Setting_Type.int,
        value: 32,
        unit: 'bones'
    },
    dynamic_bone_max_collider_check_count: { //if an avatar has more Dynamic Bone Collider Checks than is listed here, all Dynamic Bone Collider components will be disabled
        key: 'dynamic_bone_max_collider_check_count',
        type: Setting_Type.int,
        value: 8,
        unit: 'collider checks'
    },
    // camera and screenshots
    camera_res_height: { // height of images taken with VRChat camera when Config FIle is selected in Photo Resolution - 720 to 4320
        key: 'camera_res_height',
        type: Setting_Type.rang,
        value: 1080,
        min: 720,
        max: 4320
    },
    camera_res_width: { // width of images taken with VRChat camera when Config FIle is selected in Photo Resolution - 1280 to 7680
        key: 'camera_res_width',
        type: Setting_Type.rang,
        value: 1920,
        min: 1280,
        max: 7680
    },
    screenshot_res_height: { // height of screenshots taken with F12 - 720 to 2160
        key: 'screenshot_res_height',
        type: Setting_Type.rang,
        value: 1080,
        min: 720,
        max: 2160
    },
    screenshot_res_width: { // width of screenshots taken with F12 - 1280 to 3840
        key: 'screenshot_res_width',
        type: Setting_Type.rang,
        value: 1920,
        min: 1280,
        max: 3840
    },
    picture_output_folder: { // path of images taken with VRChat camera
        key: 'picture_output_folder',
        type: Setting_Type.str,
        value: "%USERPROFILE%/Imágenes/VRChat",
    },
    picture_output_split_by_date: { // if false photos will be dumped directly into the output folder without beign sorted into YYYY-MM folders
        key: 'picture_output_split_by_date',
        type: Setting_Type.bool,
        value: true
    },
    // first-person steadycam fov
    fpv_steadycam_fov: { // HMDs default value 50 to 55, for stream/desktop 65 to 70 - 30 to 110
        key: 'fpv_steadycam_fov',
        type: Setting_Type.rang,
        value: 65,
        min: 30,
        max: 110
    }
});