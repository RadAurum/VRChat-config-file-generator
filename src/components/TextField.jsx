import { useStore } from '@nanostores/preact'

import { getLangFromUrl, useTranslations } from '../u18n/utils'

import { $default_settings, $settings, $astro } from '../pages/index.astro'
import { Setting_Type } from '../utils/settings_type'

export function TextField({ valueName = "", url = "" } = props) {

    const settings = useStore($settings);
    const default_settings = useStore($default_settings);
    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);

    return <div class="flex flex-row">
        <p class="basis-2/5">{t(valueName)}</p>
        <div class="flex flex-row basis-3/5 gap-2 w-64">
            <input
                class="grow"
                value={settings[valueName].value}
                onChange={(e) => {
                    $settings.setKey(valueName, {
                        type: Setting_Type.str,
                        key: settings[valueName].key,
                        value: e.target.value
                    })
                }}
            />
            <button class="justify-self-end" onClick={() => {
                $settings.setKey(valueName, {
                    type: Setting_Type.str,
                    key: settings[valueName].key,
                    value: default_settings[valueName].value
                })
            }}>
                reset
            </button>
        </div>
    </div>
}