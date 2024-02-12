import { useStore } from '@nanostores/preact'

import { getLangFromUrl, useTranslations } from '../u18n/utils'

import { $default_settings, $settings, $astro } from '../pages/index.astro'
import { Setting_Type } from '../utils/settings_type'

export function Slider({ min = 0, max = 100, valueName = "", url = "" } = props) {

    const settings = useStore($settings);
    const default_settings = useStore($default_settings);
    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);
    // const default_settings = useStore($default_settings)
    // console.log(settings[valueName])

    return <div class="flex flex-row">
        <p class="basis-2/5">{t(valueName)}</p>
        <div class="flex flex-row basis-3/5 gap-2 w-64">
            <div class="flex grow">
                <input
                    class="flex-initial grow"
                    value={settings[valueName].value}
                    type="range"
                    min={min}
                    max={max}
                    // onMouseMove={(e) => {
                    //     setLocalValue(parseInt(e.target.value))
                    //     // console.log(e.target.value)
                    // }}
                    onInput={(e) => {
                        $settings.setKey(valueName, {
                            type: Setting_Type.rang,
                            key: settings[valueName].key,
                            min: settings[valueName].min,
                            max: settings[valueName].max,
                            value: parseInt(e.target.value)
                        })
                    }}
                    onMouseUp={(e) => {
                        $settings.setKey(valueName, {
                            type: Setting_Type.rang,
                            key: settings[valueName].key,
                            min: settings[valueName].min,
                            max: settings[valueName].max,
                            value: parseInt(e.target.value)
                        })
                    }}
                />
                <input
                    class="flex-initial w-20 px-1"
                    type="number"
                    value={settings[valueName].value}
                    min={settings[valueName].min}
                    max={settings[valueName].max}
                    onInput={(e) => {
                        if (e.target.value >= settings[valueName].min && e.target.value <= settings[valueName].max) {
                            $settings.setKey(valueName, {
                                type: Setting_Type.rang,
                                key: settings[valueName].key,
                                min: settings[valueName].min,
                                max: settings[valueName].max,
                                value: parseInt(e.target.value)
                            })
                        }
                    }}
                    onfocusout={(e) => {
                        if (e.target.value > settings[valueName].max) {
                            $settings.setKey(valueName, {
                                type: Setting_Type.rang,
                                key: settings[valueName].key,
                                min: settings[valueName].min,
                                max: settings[valueName].max,
                                value: parseInt(settings[valueName].max)
                            })
                        }
                        if (e.target.value < settings[valueName].min) {
                            $settings.setKey(valueName, {
                                type: Setting_Type.rang,
                                key: settings[valueName].key,
                                min: settings[valueName].min,
                                max: settings[valueName].max,
                                value: parseInt(settings[valueName].min)
                            })
                        }
                    }}
                />
            </div>
            <button onClick={() => {
                $settings.setKey(valueName, {
                    type: Setting_Type.rang,
                    key: settings[valueName].key,
                    min: settings[valueName].min,
                    max: settings[valueName].max,
                    value: parseInt(default_settings[valueName].value)
                })
            }}>
                reset
            </button>
        </div>
    </div>
}