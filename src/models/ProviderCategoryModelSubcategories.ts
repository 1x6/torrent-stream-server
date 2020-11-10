/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../helpers'
/**
 *
 * @export
 * @interface ProviderCategoryModelSubcategories
 */
export interface ProviderCategoryModelSubcategories {
    /**
     *
     * @type {string}
     * @memberof ProviderCategoryModelSubcategories
     */
    name: string
    /**
     *
     * @type {string}
     * @memberof ProviderCategoryModelSubcategories
     */
    id: string
}

export function ProviderCategoryModelSubcategoriesFromJSON(
    json: any
): ProviderCategoryModelSubcategories {
    return ProviderCategoryModelSubcategoriesFromJSONTyped(json, false)
}

export function ProviderCategoryModelSubcategoriesFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): ProviderCategoryModelSubcategories {
    if (json === undefined || json === null) {
        return json
    }
    return {
        name: json['name'],
        id: json['id'],
    }
}

export function ProviderCategoryModelSubcategoriesToJSON(
    value?: ProviderCategoryModelSubcategories | null
): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        name: value.name,
        id: value.id,
    }
}
